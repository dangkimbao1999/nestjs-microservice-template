import { Injectable } from '@nestjs/common';
import {
  TransactionEventDto,
  TransactionResponseDto,
} from '@social-fi-workspace/shared/dto';
import * as ethers from 'ethers';

@Injectable()
export class AppService {
  private wallets: ethers.Wallet[];
  private currentIndex = 0;
  private provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  constructor() {
    // Initialize your wallets here
    // This example assumes you have the private keys and provider URL

    const privateKeys = process.env.PVK.split(',');
    this.wallets = privateKeys.map(
      (key) => new ethers.Wallet(key, this.provider),
    );
  }

  private rotateWallet(): ethers.Wallet {
    const wallet = this.wallets[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.wallets.length; // Rotate index
    return wallet;
  }

  async performTransaction(dto: TransactionEventDto): Promise<boolean> {
    try {
      const wallet = this.rotateWallet();
      const contract = new ethers.Contract(
        dto.contractAddress,
        dto.abi,
        wallet,
      );

      // Prepare the transaction options, adding the `value` if specified
      const transactionOptions = {};
      if (dto.transactionOptions.value) {
        transactionOptions['value'] = BigInt(dto.transactionOptions.value);
      }
      if (dto.transactionOptions.gasLimit) {
        transactionOptions['gasLimit'] = dto.transactionOptions.gasLimit;
      }
      if (dto.transactionOptions.gasPrice) {
        transactionOptions['gasPrice'] = BigInt(
          dto.transactionOptions.gasPrice,
        );
      }

      // Assuming dynamic method call with method name and parameters
      const txResponse = await contract[dto.methodName](
        ...dto.methodParams,
        transactionOptions,
      );

      console.log(`Transaction ${txResponse.hash} executed.`);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async transferEth(
    to: string,
    amount: string,
  ): Promise<TransactionResponseDto> {
    try {
      // Convert amount to wei, as transactions are dealt with in wei
      const value = ethers.parseEther(amount);

      // Prepare and send the transaction
      const txResponse = await this.rotateWallet().sendTransaction({
        to: to,
        value: value,
      });

      // Wait for the transaction to be mined
      await txResponse.wait();

      console.log(`ETH Transfer ${txResponse.hash} executed successfully.`);
      const status = await txResponse.wait()
      return {
        status: Boolean(Number(!!status)),
        txHash: txResponse.hash,
      }; // Transfer was successful
    } catch (error) {
      console.error(`ETH Transfer failed: ${error}`);
    }
  }
}
