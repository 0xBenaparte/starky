type RetrieveAssetsParameters = {
  starknetNetwork: "mainnet" | "goerli";
  contractAddress: string;
  ownerAddress: string;
};

export const retrieveAssets = async ({
  starknetNetwork,
  contractAddress,
  ownerAddress,
}: RetrieveAssetsParameters) => {
  const network = starknetNetwork === "mainnet" ? "api" : "api-testnet";
  const url = `https://${network}.aspect.co/api/v0/assets?contract_address=${contractAddress}&owner_address=${ownerAddress}`;

  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data.assets;
};
