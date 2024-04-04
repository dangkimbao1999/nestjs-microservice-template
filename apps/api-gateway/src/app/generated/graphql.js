'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getSdk =
  exports.GetUniqueOwnersCountDocument =
  exports._SubgraphErrorPolicy_ =
  exports.Transaction_OrderBy =
  exports.SellStatus =
  exports.RoyaltiesRegistry_OrderBy =
  exports.OwnedTokenCount_OrderBy =
  exports.OrderDirection =
  exports.Operation =
  exports.OnSaleStatus1155_OrderBy =
  exports.MarketEvent1155_OrderBy =
  exports.MarketEvent721_OrderBy =
  exports.Event_OrderBy =
  exports.EventType =
  exports.Erc1155Transfer_OrderBy =
  exports.Erc1155Token_OrderBy =
  exports.Erc1155Creator_OrderBy =
  exports.Erc1155Contract_OrderBy =
  exports.Erc1155Balance_OrderBy =
  exports.Erc721Transfer_OrderBy =
  exports.Erc721Token_OrderBy =
  exports.Erc721Creator_OrderBy =
  exports.Erc721Contract_OrderBy =
  exports.DealType =
  exports.Creator_OrderBy =
  exports.ContractType =
  exports.Block_OrderBy =
  exports.ActionState =
  exports.Account_OrderBy =
  exports.AccountCollectionOwnership_OrderBy =
    void 0;
var graphql_tag_1 = require('graphql-tag');
var AccountCollectionOwnership_OrderBy;
(function (AccountCollectionOwnership_OrderBy) {
  AccountCollectionOwnership_OrderBy['Account'] = 'account';
  AccountCollectionOwnership_OrderBy['AccountHoldingCount'] =
    'account__holdingCount';
  AccountCollectionOwnership_OrderBy['AccountId'] = 'account__id';
  AccountCollectionOwnership_OrderBy['AccountOnSaleCount'] =
    'account__onSaleCount';
  AccountCollectionOwnership_OrderBy['Contract'] = 'contract';
  AccountCollectionOwnership_OrderBy['Id'] = 'id';
  AccountCollectionOwnership_OrderBy['OwnsTokens'] = 'ownsTokens';
})(
  AccountCollectionOwnership_OrderBy ||
    (exports.AccountCollectionOwnership_OrderBy =
      AccountCollectionOwnership_OrderBy =
        {})
);
var Account_OrderBy;
(function (Account_OrderBy) {
  Account_OrderBy['Erc721tokens'] = 'ERC721tokens';
  Account_OrderBy['Erc721transferFromEvent'] = 'ERC721transferFromEvent';
  Account_OrderBy['Erc721transferToEvent'] = 'ERC721transferToEvent';
  Account_OrderBy['Erc1155balances'] = 'ERC1155balances';
  Account_OrderBy['Erc1155transferFromEvent'] = 'ERC1155transferFromEvent';
  Account_OrderBy['Erc1155transferToEvent'] = 'ERC1155transferToEvent';
  Account_OrderBy['OnSaleStatus1155'] = 'OnSaleStatus1155';
  Account_OrderBy['OwnedTokens'] = 'OwnedTokens';
  Account_OrderBy['AsErc721'] = 'asERC721';
  Account_OrderBy['AsErc721Count'] = 'asERC721__count';
  Account_OrderBy['AsErc721CreateAt'] = 'asERC721__createAt';
  Account_OrderBy['AsErc721HolderCount'] = 'asERC721__holderCount';
  Account_OrderBy['AsErc721Id'] = 'asERC721__id';
  Account_OrderBy['AsErc721Name'] = 'asERC721__name';
  Account_OrderBy['AsErc721SupportsMetadata'] = 'asERC721__supportsMetadata';
  Account_OrderBy['AsErc721Symbol'] = 'asERC721__symbol';
  Account_OrderBy['AsErc721TxCreation'] = 'asERC721__txCreation';
  Account_OrderBy['AsErc721Volume'] = 'asERC721__volume';
  Account_OrderBy['AsErc1155'] = 'asERC1155';
  Account_OrderBy['AsErc1155Count'] = 'asERC1155__count';
  Account_OrderBy['AsErc1155CreateAt'] = 'asERC1155__createAt';
  Account_OrderBy['AsErc1155HolderCount'] = 'asERC1155__holderCount';
  Account_OrderBy['AsErc1155Id'] = 'asERC1155__id';
  Account_OrderBy['AsErc1155Name'] = 'asERC1155__name';
  Account_OrderBy['AsErc1155Symbol'] = 'asERC1155__symbol';
  Account_OrderBy['AsErc1155TxCreation'] = 'asERC1155__txCreation';
  Account_OrderBy['AsErc1155Volume'] = 'asERC1155__volume';
  Account_OrderBy['Events'] = 'events';
  Account_OrderBy['HoldingCount'] = 'holdingCount';
  Account_OrderBy['Id'] = 'id';
  Account_OrderBy['OnSaleCount'] = 'onSaleCount';
})(Account_OrderBy || (exports.Account_OrderBy = Account_OrderBy = {}));
var ActionState;
(function (ActionState) {
  ActionState['Executed'] = 'EXECUTED';
  ActionState['Pending'] = 'PENDING';
})(ActionState || (exports.ActionState = ActionState = {}));
var Block_OrderBy;
(function (Block_OrderBy) {
  Block_OrderBy['Address'] = 'address';
  Block_OrderBy['BlockNumber'] = 'blockNumber';
  Block_OrderBy['Event'] = 'event';
  Block_OrderBy['From'] = 'from';
  Block_OrderBy['Id'] = 'id';
  Block_OrderBy['Price'] = 'price';
  Block_OrderBy['Quantity'] = 'quantity';
  Block_OrderBy['QuoteToken'] = 'quoteToken';
  Block_OrderBy['Timestampt'] = 'timestampt';
  Block_OrderBy['To'] = 'to';
  Block_OrderBy['TokenId'] = 'tokenId';
})(Block_OrderBy || (exports.Block_OrderBy = Block_OrderBy = {}));
var ContractType;
(function (ContractType) {
  ContractType['Erc721Factory'] = 'ERC721Factory';
  ContractType['Erc721Proxy'] = 'ERC721Proxy';
  ContractType['Erc1155Factory'] = 'ERC1155Factory';
  ContractType['Erc1155Proxy'] = 'ERC1155Proxy';
  ContractType['ExchangeV2'] = 'ExchangeV2';
  ContractType['NftTransferProxies'] = 'NFTTransferProxies';
  ContractType['Royalties'] = 'Royalties';
})(ContractType || (exports.ContractType = ContractType = {}));
var Creator_OrderBy;
(function (Creator_OrderBy) {
  Creator_OrderBy['Id'] = 'id';
  Creator_OrderBy['Token721'] = 'token721';
  Creator_OrderBy['Token1155'] = 'token1155';
})(Creator_OrderBy || (exports.Creator_OrderBy = Creator_OrderBy = {}));
var DealType;
(function (DealType) {
  DealType['Bid'] = 'Bid';
  DealType['Order'] = 'Order';
})(DealType || (exports.DealType = DealType = {}));
var Erc721Contract_OrderBy;
(function (Erc721Contract_OrderBy) {
  Erc721Contract_OrderBy['AsAccount'] = 'asAccount';
  Erc721Contract_OrderBy['AsAccountHoldingCount'] = 'asAccount__holdingCount';
  Erc721Contract_OrderBy['AsAccountId'] = 'asAccount__id';
  Erc721Contract_OrderBy['AsAccountOnSaleCount'] = 'asAccount__onSaleCount';
  Erc721Contract_OrderBy['Count'] = 'count';
  Erc721Contract_OrderBy['CreateAt'] = 'createAt';
  Erc721Contract_OrderBy['HolderCount'] = 'holderCount';
  Erc721Contract_OrderBy['Id'] = 'id';
  Erc721Contract_OrderBy['Name'] = 'name';
  Erc721Contract_OrderBy['SupportsMetadata'] = 'supportsMetadata';
  Erc721Contract_OrderBy['Symbol'] = 'symbol';
  Erc721Contract_OrderBy['Tokens'] = 'tokens';
  Erc721Contract_OrderBy['Transfers'] = 'transfers';
  Erc721Contract_OrderBy['TxCreation'] = 'txCreation';
  Erc721Contract_OrderBy['Volume'] = 'volume';
})(
  Erc721Contract_OrderBy ||
    (exports.Erc721Contract_OrderBy = Erc721Contract_OrderBy = {})
);
var Erc721Creator_OrderBy;
(function (Erc721Creator_OrderBy) {
  Erc721Creator_OrderBy['Collection'] = 'collection';
  Erc721Creator_OrderBy['CollectionCreateAt'] = 'collection__createAt';
  Erc721Creator_OrderBy['CollectionId'] = 'collection__id';
  Erc721Creator_OrderBy['CollectionIdentifier'] = 'collection__identifier';
  Erc721Creator_OrderBy['CollectionTokenId'] = 'collection__tokenId';
  Erc721Creator_OrderBy['CollectionTxCreation'] = 'collection__txCreation';
  Erc721Creator_OrderBy['CollectionUri'] = 'collection__uri';
  Erc721Creator_OrderBy['Creator'] = 'creator';
  Erc721Creator_OrderBy['CreatorId'] = 'creator__id';
  Erc721Creator_OrderBy['Id'] = 'id';
  Erc721Creator_OrderBy['Share'] = 'share';
})(
  Erc721Creator_OrderBy ||
    (exports.Erc721Creator_OrderBy = Erc721Creator_OrderBy = {})
);
var Erc721Token_OrderBy;
(function (Erc721Token_OrderBy) {
  Erc721Token_OrderBy['Approval'] = 'approval';
  Erc721Token_OrderBy['ApprovalHoldingCount'] = 'approval__holdingCount';
  Erc721Token_OrderBy['ApprovalId'] = 'approval__id';
  Erc721Token_OrderBy['ApprovalOnSaleCount'] = 'approval__onSaleCount';
  Erc721Token_OrderBy['Contract'] = 'contract';
  Erc721Token_OrderBy['ContractCount'] = 'contract__count';
  Erc721Token_OrderBy['ContractCreateAt'] = 'contract__createAt';
  Erc721Token_OrderBy['ContractHolderCount'] = 'contract__holderCount';
  Erc721Token_OrderBy['ContractId'] = 'contract__id';
  Erc721Token_OrderBy['ContractName'] = 'contract__name';
  Erc721Token_OrderBy['ContractSupportsMetadata'] =
    'contract__supportsMetadata';
  Erc721Token_OrderBy['ContractSymbol'] = 'contract__symbol';
  Erc721Token_OrderBy['ContractTxCreation'] = 'contract__txCreation';
  Erc721Token_OrderBy['ContractVolume'] = 'contract__volume';
  Erc721Token_OrderBy['CreateAt'] = 'createAt';
  Erc721Token_OrderBy['Creators'] = 'creators';
  Erc721Token_OrderBy['Id'] = 'id';
  Erc721Token_OrderBy['Identifier'] = 'identifier';
  Erc721Token_OrderBy['Owner'] = 'owner';
  Erc721Token_OrderBy['OwnerHoldingCount'] = 'owner__holdingCount';
  Erc721Token_OrderBy['OwnerId'] = 'owner__id';
  Erc721Token_OrderBy['OwnerOnSaleCount'] = 'owner__onSaleCount';
  Erc721Token_OrderBy['TokenId'] = 'tokenId';
  Erc721Token_OrderBy['Transfers'] = 'transfers';
  Erc721Token_OrderBy['TxCreation'] = 'txCreation';
  Erc721Token_OrderBy['Uri'] = 'uri';
})(
  Erc721Token_OrderBy ||
    (exports.Erc721Token_OrderBy = Erc721Token_OrderBy = {})
);
var Erc721Transfer_OrderBy;
(function (Erc721Transfer_OrderBy) {
  Erc721Transfer_OrderBy['Contract'] = 'contract';
  Erc721Transfer_OrderBy['ContractCount'] = 'contract__count';
  Erc721Transfer_OrderBy['ContractCreateAt'] = 'contract__createAt';
  Erc721Transfer_OrderBy['ContractHolderCount'] = 'contract__holderCount';
  Erc721Transfer_OrderBy['ContractId'] = 'contract__id';
  Erc721Transfer_OrderBy['ContractName'] = 'contract__name';
  Erc721Transfer_OrderBy['ContractSupportsMetadata'] =
    'contract__supportsMetadata';
  Erc721Transfer_OrderBy['ContractSymbol'] = 'contract__symbol';
  Erc721Transfer_OrderBy['ContractTxCreation'] = 'contract__txCreation';
  Erc721Transfer_OrderBy['ContractVolume'] = 'contract__volume';
  Erc721Transfer_OrderBy['Emitter'] = 'emitter';
  Erc721Transfer_OrderBy['EmitterHoldingCount'] = 'emitter__holdingCount';
  Erc721Transfer_OrderBy['EmitterId'] = 'emitter__id';
  Erc721Transfer_OrderBy['EmitterOnSaleCount'] = 'emitter__onSaleCount';
  Erc721Transfer_OrderBy['From'] = 'from';
  Erc721Transfer_OrderBy['FromHoldingCount'] = 'from__holdingCount';
  Erc721Transfer_OrderBy['FromId'] = 'from__id';
  Erc721Transfer_OrderBy['FromOnSaleCount'] = 'from__onSaleCount';
  Erc721Transfer_OrderBy['Id'] = 'id';
  Erc721Transfer_OrderBy['Timestamp'] = 'timestamp';
  Erc721Transfer_OrderBy['To'] = 'to';
  Erc721Transfer_OrderBy['ToHoldingCount'] = 'to__holdingCount';
  Erc721Transfer_OrderBy['ToId'] = 'to__id';
  Erc721Transfer_OrderBy['ToOnSaleCount'] = 'to__onSaleCount';
  Erc721Transfer_OrderBy['Token'] = 'token';
  Erc721Transfer_OrderBy['TokenCreateAt'] = 'token__createAt';
  Erc721Transfer_OrderBy['TokenId'] = 'token__id';
  Erc721Transfer_OrderBy['TokenIdentifier'] = 'token__identifier';
  Erc721Transfer_OrderBy['TokenTokenId'] = 'token__tokenId';
  Erc721Transfer_OrderBy['TokenTxCreation'] = 'token__txCreation';
  Erc721Transfer_OrderBy['TokenUri'] = 'token__uri';
  Erc721Transfer_OrderBy['Transaction'] = 'transaction';
  Erc721Transfer_OrderBy['TransactionBlockNumber'] = 'transaction__blockNumber';
  Erc721Transfer_OrderBy['TransactionId'] = 'transaction__id';
  Erc721Transfer_OrderBy['TransactionTimestamp'] = 'transaction__timestamp';
})(
  Erc721Transfer_OrderBy ||
    (exports.Erc721Transfer_OrderBy = Erc721Transfer_OrderBy = {})
);
var Erc1155Balance_OrderBy;
(function (Erc1155Balance_OrderBy) {
  Erc1155Balance_OrderBy['Account'] = 'account';
  Erc1155Balance_OrderBy['AccountHoldingCount'] = 'account__holdingCount';
  Erc1155Balance_OrderBy['AccountId'] = 'account__id';
  Erc1155Balance_OrderBy['AccountOnSaleCount'] = 'account__onSaleCount';
  Erc1155Balance_OrderBy['Contract'] = 'contract';
  Erc1155Balance_OrderBy['ContractCount'] = 'contract__count';
  Erc1155Balance_OrderBy['ContractCreateAt'] = 'contract__createAt';
  Erc1155Balance_OrderBy['ContractHolderCount'] = 'contract__holderCount';
  Erc1155Balance_OrderBy['ContractId'] = 'contract__id';
  Erc1155Balance_OrderBy['ContractName'] = 'contract__name';
  Erc1155Balance_OrderBy['ContractSymbol'] = 'contract__symbol';
  Erc1155Balance_OrderBy['ContractTxCreation'] = 'contract__txCreation';
  Erc1155Balance_OrderBy['ContractVolume'] = 'contract__volume';
  Erc1155Balance_OrderBy['Id'] = 'id';
  Erc1155Balance_OrderBy['Token'] = 'token';
  Erc1155Balance_OrderBy['TokenCreateAt'] = 'token__createAt';
  Erc1155Balance_OrderBy['TokenId'] = 'token__id';
  Erc1155Balance_OrderBy['TokenIdentifier'] = 'token__identifier';
  Erc1155Balance_OrderBy['TokenTokenId'] = 'token__tokenId';
  Erc1155Balance_OrderBy['TokenTxCreation'] = 'token__txCreation';
  Erc1155Balance_OrderBy['TokenUri'] = 'token__uri';
  Erc1155Balance_OrderBy['TransferFromEvent'] = 'transferFromEvent';
  Erc1155Balance_OrderBy['TransferToEvent'] = 'transferToEvent';
  Erc1155Balance_OrderBy['Value'] = 'value';
  Erc1155Balance_OrderBy['ValueExact'] = 'valueExact';
})(
  Erc1155Balance_OrderBy ||
    (exports.Erc1155Balance_OrderBy = Erc1155Balance_OrderBy = {})
);
var Erc1155Contract_OrderBy;
(function (Erc1155Contract_OrderBy) {
  Erc1155Contract_OrderBy['AsAccount'] = 'asAccount';
  Erc1155Contract_OrderBy['AsAccountHoldingCount'] = 'asAccount__holdingCount';
  Erc1155Contract_OrderBy['AsAccountId'] = 'asAccount__id';
  Erc1155Contract_OrderBy['AsAccountOnSaleCount'] = 'asAccount__onSaleCount';
  Erc1155Contract_OrderBy['Balances'] = 'balances';
  Erc1155Contract_OrderBy['Count'] = 'count';
  Erc1155Contract_OrderBy['CreateAt'] = 'createAt';
  Erc1155Contract_OrderBy['HolderCount'] = 'holderCount';
  Erc1155Contract_OrderBy['Id'] = 'id';
  Erc1155Contract_OrderBy['Name'] = 'name';
  Erc1155Contract_OrderBy['Symbol'] = 'symbol';
  Erc1155Contract_OrderBy['Tokens'] = 'tokens';
  Erc1155Contract_OrderBy['Transfers'] = 'transfers';
  Erc1155Contract_OrderBy['TxCreation'] = 'txCreation';
  Erc1155Contract_OrderBy['Volume'] = 'volume';
})(
  Erc1155Contract_OrderBy ||
    (exports.Erc1155Contract_OrderBy = Erc1155Contract_OrderBy = {})
);
var Erc1155Creator_OrderBy;
(function (Erc1155Creator_OrderBy) {
  Erc1155Creator_OrderBy['Collection'] = 'collection';
  Erc1155Creator_OrderBy['CollectionCreateAt'] = 'collection__createAt';
  Erc1155Creator_OrderBy['CollectionId'] = 'collection__id';
  Erc1155Creator_OrderBy['CollectionIdentifier'] = 'collection__identifier';
  Erc1155Creator_OrderBy['CollectionTokenId'] = 'collection__tokenId';
  Erc1155Creator_OrderBy['CollectionTxCreation'] = 'collection__txCreation';
  Erc1155Creator_OrderBy['CollectionUri'] = 'collection__uri';
  Erc1155Creator_OrderBy['Creator'] = 'creator';
  Erc1155Creator_OrderBy['CreatorId'] = 'creator__id';
  Erc1155Creator_OrderBy['Id'] = 'id';
  Erc1155Creator_OrderBy['Share'] = 'share';
})(
  Erc1155Creator_OrderBy ||
    (exports.Erc1155Creator_OrderBy = Erc1155Creator_OrderBy = {})
);
var Erc1155Token_OrderBy;
(function (Erc1155Token_OrderBy) {
  Erc1155Token_OrderBy['Balances'] = 'balances';
  Erc1155Token_OrderBy['Contract'] = 'contract';
  Erc1155Token_OrderBy['ContractCount'] = 'contract__count';
  Erc1155Token_OrderBy['ContractCreateAt'] = 'contract__createAt';
  Erc1155Token_OrderBy['ContractHolderCount'] = 'contract__holderCount';
  Erc1155Token_OrderBy['ContractId'] = 'contract__id';
  Erc1155Token_OrderBy['ContractName'] = 'contract__name';
  Erc1155Token_OrderBy['ContractSymbol'] = 'contract__symbol';
  Erc1155Token_OrderBy['ContractTxCreation'] = 'contract__txCreation';
  Erc1155Token_OrderBy['ContractVolume'] = 'contract__volume';
  Erc1155Token_OrderBy['CreateAt'] = 'createAt';
  Erc1155Token_OrderBy['Creators'] = 'creators';
  Erc1155Token_OrderBy['Id'] = 'id';
  Erc1155Token_OrderBy['Identifier'] = 'identifier';
  Erc1155Token_OrderBy['TokenId'] = 'tokenId';
  Erc1155Token_OrderBy['TotalSupply'] = 'totalSupply';
  Erc1155Token_OrderBy['TotalSupplyId'] = 'totalSupply__id';
  Erc1155Token_OrderBy['TotalSupplyValue'] = 'totalSupply__value';
  Erc1155Token_OrderBy['TotalSupplyValueExact'] = 'totalSupply__valueExact';
  Erc1155Token_OrderBy['Transfers'] = 'transfers';
  Erc1155Token_OrderBy['TxCreation'] = 'txCreation';
  Erc1155Token_OrderBy['Uri'] = 'uri';
})(
  Erc1155Token_OrderBy ||
    (exports.Erc1155Token_OrderBy = Erc1155Token_OrderBy = {})
);
var Erc1155Transfer_OrderBy;
(function (Erc1155Transfer_OrderBy) {
  Erc1155Transfer_OrderBy['Contract'] = 'contract';
  Erc1155Transfer_OrderBy['ContractCount'] = 'contract__count';
  Erc1155Transfer_OrderBy['ContractCreateAt'] = 'contract__createAt';
  Erc1155Transfer_OrderBy['ContractHolderCount'] = 'contract__holderCount';
  Erc1155Transfer_OrderBy['ContractId'] = 'contract__id';
  Erc1155Transfer_OrderBy['ContractName'] = 'contract__name';
  Erc1155Transfer_OrderBy['ContractSymbol'] = 'contract__symbol';
  Erc1155Transfer_OrderBy['ContractTxCreation'] = 'contract__txCreation';
  Erc1155Transfer_OrderBy['ContractVolume'] = 'contract__volume';
  Erc1155Transfer_OrderBy['Emitter'] = 'emitter';
  Erc1155Transfer_OrderBy['EmitterHoldingCount'] = 'emitter__holdingCount';
  Erc1155Transfer_OrderBy['EmitterId'] = 'emitter__id';
  Erc1155Transfer_OrderBy['EmitterOnSaleCount'] = 'emitter__onSaleCount';
  Erc1155Transfer_OrderBy['From'] = 'from';
  Erc1155Transfer_OrderBy['FromBalance'] = 'fromBalance';
  Erc1155Transfer_OrderBy['FromBalanceId'] = 'fromBalance__id';
  Erc1155Transfer_OrderBy['FromBalanceValue'] = 'fromBalance__value';
  Erc1155Transfer_OrderBy['FromBalanceValueExact'] = 'fromBalance__valueExact';
  Erc1155Transfer_OrderBy['FromHoldingCount'] = 'from__holdingCount';
  Erc1155Transfer_OrderBy['FromId'] = 'from__id';
  Erc1155Transfer_OrderBy['FromOnSaleCount'] = 'from__onSaleCount';
  Erc1155Transfer_OrderBy['Id'] = 'id';
  Erc1155Transfer_OrderBy['Timestamp'] = 'timestamp';
  Erc1155Transfer_OrderBy['To'] = 'to';
  Erc1155Transfer_OrderBy['ToBalance'] = 'toBalance';
  Erc1155Transfer_OrderBy['ToBalanceId'] = 'toBalance__id';
  Erc1155Transfer_OrderBy['ToBalanceValue'] = 'toBalance__value';
  Erc1155Transfer_OrderBy['ToBalanceValueExact'] = 'toBalance__valueExact';
  Erc1155Transfer_OrderBy['ToHoldingCount'] = 'to__holdingCount';
  Erc1155Transfer_OrderBy['ToId'] = 'to__id';
  Erc1155Transfer_OrderBy['ToOnSaleCount'] = 'to__onSaleCount';
  Erc1155Transfer_OrderBy['Token'] = 'token';
  Erc1155Transfer_OrderBy['TokenCreateAt'] = 'token__createAt';
  Erc1155Transfer_OrderBy['TokenId'] = 'token__id';
  Erc1155Transfer_OrderBy['TokenIdentifier'] = 'token__identifier';
  Erc1155Transfer_OrderBy['TokenTokenId'] = 'token__tokenId';
  Erc1155Transfer_OrderBy['TokenTxCreation'] = 'token__txCreation';
  Erc1155Transfer_OrderBy['TokenUri'] = 'token__uri';
  Erc1155Transfer_OrderBy['Transaction'] = 'transaction';
  Erc1155Transfer_OrderBy['TransactionBlockNumber'] =
    'transaction__blockNumber';
  Erc1155Transfer_OrderBy['TransactionId'] = 'transaction__id';
  Erc1155Transfer_OrderBy['TransactionTimestamp'] = 'transaction__timestamp';
  Erc1155Transfer_OrderBy['Value'] = 'value';
  Erc1155Transfer_OrderBy['ValueExact'] = 'valueExact';
})(
  Erc1155Transfer_OrderBy ||
    (exports.Erc1155Transfer_OrderBy = Erc1155Transfer_OrderBy = {})
);
var EventType;
(function (EventType) {
  EventType['AcceptBid'] = 'AcceptBid';
  EventType['AskCancel'] = 'AskCancel';
  EventType['AskNew'] = 'AskNew';
  EventType['Bid'] = 'Bid';
  EventType['CancelBid'] = 'CancelBid';
  EventType['Mint'] = 'Mint';
  EventType['Trade'] = 'Trade';
  EventType['Transfer'] = 'Transfer';
})(EventType || (exports.EventType = EventType = {}));
var Event_OrderBy;
(function (Event_OrderBy) {
  Event_OrderBy['Emitter'] = 'emitter';
  Event_OrderBy['EmitterHoldingCount'] = 'emitter__holdingCount';
  Event_OrderBy['EmitterId'] = 'emitter__id';
  Event_OrderBy['EmitterOnSaleCount'] = 'emitter__onSaleCount';
  Event_OrderBy['Id'] = 'id';
  Event_OrderBy['Timestamp'] = 'timestamp';
  Event_OrderBy['Transaction'] = 'transaction';
  Event_OrderBy['TransactionBlockNumber'] = 'transaction__blockNumber';
  Event_OrderBy['TransactionId'] = 'transaction__id';
  Event_OrderBy['TransactionTimestamp'] = 'transaction__timestamp';
})(Event_OrderBy || (exports.Event_OrderBy = Event_OrderBy = {}));
var MarketEvent721_OrderBy;
(function (MarketEvent721_OrderBy) {
  MarketEvent721_OrderBy['Address'] = 'address';
  MarketEvent721_OrderBy['Event'] = 'event';
  MarketEvent721_OrderBy['From'] = 'from';
  MarketEvent721_OrderBy['Id'] = 'id';
  MarketEvent721_OrderBy['Metadata'] = 'metadata';
  MarketEvent721_OrderBy['NetPrice'] = 'netPrice';
  MarketEvent721_OrderBy['NftId'] = 'nftId';
  MarketEvent721_OrderBy['NftIdCreateAt'] = 'nftId__createAt';
  MarketEvent721_OrderBy['NftIdId'] = 'nftId__id';
  MarketEvent721_OrderBy['NftIdIdentifier'] = 'nftId__identifier';
  MarketEvent721_OrderBy['NftIdTokenId'] = 'nftId__tokenId';
  MarketEvent721_OrderBy['NftIdTxCreation'] = 'nftId__txCreation';
  MarketEvent721_OrderBy['NftIdUri'] = 'nftId__uri';
  MarketEvent721_OrderBy['Price'] = 'price';
  MarketEvent721_OrderBy['QuoteToken'] = 'quoteToken';
  MarketEvent721_OrderBy['Timestamp'] = 'timestamp';
  MarketEvent721_OrderBy['To'] = 'to';
  MarketEvent721_OrderBy['TxHash'] = 'txHash';
})(
  MarketEvent721_OrderBy ||
    (exports.MarketEvent721_OrderBy = MarketEvent721_OrderBy = {})
);
var MarketEvent1155_OrderBy;
(function (MarketEvent1155_OrderBy) {
  MarketEvent1155_OrderBy['Address'] = 'address';
  MarketEvent1155_OrderBy['Event'] = 'event';
  MarketEvent1155_OrderBy['From'] = 'from';
  MarketEvent1155_OrderBy['Id'] = 'id';
  MarketEvent1155_OrderBy['NetPrice'] = 'netPrice';
  MarketEvent1155_OrderBy['NftId'] = 'nftId';
  MarketEvent1155_OrderBy['NftIdCreateAt'] = 'nftId__createAt';
  MarketEvent1155_OrderBy['NftIdId'] = 'nftId__id';
  MarketEvent1155_OrderBy['NftIdIdentifier'] = 'nftId__identifier';
  MarketEvent1155_OrderBy['NftIdTokenId'] = 'nftId__tokenId';
  MarketEvent1155_OrderBy['NftIdTxCreation'] = 'nftId__txCreation';
  MarketEvent1155_OrderBy['NftIdUri'] = 'nftId__uri';
  MarketEvent1155_OrderBy['Operation'] = 'operation';
  MarketEvent1155_OrderBy['OperationId'] = 'operationId';
  MarketEvent1155_OrderBy['Price'] = 'price';
  MarketEvent1155_OrderBy['Quantity'] = 'quantity';
  MarketEvent1155_OrderBy['QuoteToken'] = 'quoteToken';
  MarketEvent1155_OrderBy['Timestamp'] = 'timestamp';
  MarketEvent1155_OrderBy['To'] = 'to';
  MarketEvent1155_OrderBy['TxHash'] = 'txHash';
})(
  MarketEvent1155_OrderBy ||
    (exports.MarketEvent1155_OrderBy = MarketEvent1155_OrderBy = {})
);
var OnSaleStatus1155_OrderBy;
(function (OnSaleStatus1155_OrderBy) {
  OnSaleStatus1155_OrderBy['Contract'] = 'contract';
  OnSaleStatus1155_OrderBy['Id'] = 'id';
  OnSaleStatus1155_OrderBy['IsOnSale'] = 'isOnSale';
  OnSaleStatus1155_OrderBy['Owner'] = 'owner';
  OnSaleStatus1155_OrderBy['OwnerHoldingCount'] = 'owner__holdingCount';
  OnSaleStatus1155_OrderBy['OwnerId'] = 'owner__id';
  OnSaleStatus1155_OrderBy['OwnerOnSaleCount'] = 'owner__onSaleCount';
  OnSaleStatus1155_OrderBy['TokenId'] = 'tokenId';
})(
  OnSaleStatus1155_OrderBy ||
    (exports.OnSaleStatus1155_OrderBy = OnSaleStatus1155_OrderBy = {})
);
var Operation;
(function (Operation) {
  Operation['Ask'] = 'Ask';
  Operation['Offer'] = 'Offer';
})(Operation || (exports.Operation = Operation = {}));
/** Defines the order direction, either ascending or descending */
var OrderDirection;
(function (OrderDirection) {
  OrderDirection['Asc'] = 'asc';
  OrderDirection['Desc'] = 'desc';
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
var OwnedTokenCount_OrderBy;
(function (OwnedTokenCount_OrderBy) {
  OwnedTokenCount_OrderBy['Contract'] = 'contract';
  OwnedTokenCount_OrderBy['Count'] = 'count';
  OwnedTokenCount_OrderBy['Id'] = 'id';
  OwnedTokenCount_OrderBy['Owner'] = 'owner';
  OwnedTokenCount_OrderBy['OwnerHoldingCount'] = 'owner__holdingCount';
  OwnedTokenCount_OrderBy['OwnerId'] = 'owner__id';
  OwnedTokenCount_OrderBy['OwnerOnSaleCount'] = 'owner__onSaleCount';
  OwnedTokenCount_OrderBy['Timestamp'] = 'timestamp';
})(
  OwnedTokenCount_OrderBy ||
    (exports.OwnedTokenCount_OrderBy = OwnedTokenCount_OrderBy = {})
);
var RoyaltiesRegistry_OrderBy;
(function (RoyaltiesRegistry_OrderBy) {
  RoyaltiesRegistry_OrderBy['Account'] = 'account';
  RoyaltiesRegistry_OrderBy['CollectionId'] = 'collectionId';
  RoyaltiesRegistry_OrderBy['Id'] = 'id';
  RoyaltiesRegistry_OrderBy['TokenId'] = 'tokenId';
  RoyaltiesRegistry_OrderBy['Value'] = 'value';
})(
  RoyaltiesRegistry_OrderBy ||
    (exports.RoyaltiesRegistry_OrderBy = RoyaltiesRegistry_OrderBy = {})
);
var SellStatus;
(function (SellStatus) {
  SellStatus['AcceptBid'] = 'AcceptBid';
  SellStatus['AskCancel'] = 'AskCancel';
  SellStatus['AskNew'] = 'AskNew';
  SellStatus['Bid'] = 'Bid';
  SellStatus['CancelBid'] = 'CancelBid';
  SellStatus['Trade'] = 'Trade';
})(SellStatus || (exports.SellStatus = SellStatus = {}));
var Transaction_OrderBy;
(function (Transaction_OrderBy) {
  Transaction_OrderBy['BlockNumber'] = 'blockNumber';
  Transaction_OrderBy['Events'] = 'events';
  Transaction_OrderBy['Id'] = 'id';
  Transaction_OrderBy['Timestamp'] = 'timestamp';
})(
  Transaction_OrderBy ||
    (exports.Transaction_OrderBy = Transaction_OrderBy = {})
);
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
  /** Data will be returned even if the subgraph has indexing errors */
  _SubgraphErrorPolicy_['Allow'] = 'allow';
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  _SubgraphErrorPolicy_['Deny'] = 'deny';
})(
  _SubgraphErrorPolicy_ ||
    (exports._SubgraphErrorPolicy_ = _SubgraphErrorPolicy_ = {})
);
exports.GetUniqueOwnersCountDocument = (0, graphql_tag_1.default)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n    query GetUniqueOwnersCount($contractAddress: String!, $skip: Int = 0, $first: Int = 1000) {\n  ownedTokenCounts(\n    where: {contract: $contractAddress, count_gt: 0}\n    orderBy: timestamp\n    orderDirection: desc\n    skip: $skip\n    first: $first\n  ) {\n    id\n    count\n    contract\n    timestamp\n  }\n}\n    ',
      ],
      [
        '\n    query GetUniqueOwnersCount($contractAddress: String!, $skip: Int = 0, $first: Int = 1000) {\n  ownedTokenCounts(\n    where: {contract: $contractAddress, count_gt: 0}\n    orderBy: timestamp\n    orderDirection: desc\n    skip: $skip\n    first: $first\n  ) {\n    id\n    count\n    contract\n    timestamp\n  }\n}\n    ',
      ]
    ))
);
var defaultWrapper = function (
  action,
  _operationName,
  _operationType,
  _variables
) {
  return action();
};
function getSdk(client, withWrapper) {
  if (withWrapper === void 0) {
    withWrapper = defaultWrapper;
  }
  return {
    GetUniqueOwnersCount: function (variables, requestHeaders) {
      return withWrapper(
        function (wrappedRequestHeaders) {
          return client.request(
            exports.GetUniqueOwnersCountDocument,
            variables,
            __assign(__assign({}, requestHeaders), wrappedRequestHeaders)
          );
        },
        'GetUniqueOwnersCount',
        'query',
        variables
      );
    },
  };
}
exports.getSdk = getSdk;
var templateObject_1;
