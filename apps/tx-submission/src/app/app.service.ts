import { Injectable } from '@nestjs/common';
import { TransactionEventDto } from '@social-fi-workspace/shared/dto';
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
}
