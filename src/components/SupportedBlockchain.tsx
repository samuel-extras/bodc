"use client";
import { useInView } from "react-intersection-observer";
const blockchains = [
  // {
  //   name: "etherum",
  //   img: "https://cdn.xoxlabs.io/images/home/coins/1_eth.svg",
  // },
  {
    name: "solana",
    img: "https://www.aver.exchange/static/new_images/solana_s_white.png",
  },
  // {
  //   name: "bsc",
  //   img: "https://cdn.xoxlabs.io/images/home/coins/2_bsc.svg",
  // },
  {
    name: "avalanche",
    img: "https://cdn.xoxlabs.io/images/home/coins/7_avalanche.svg",
  },
  {
    name: "fantom",
    img: "https://cdn.xoxlabs.io/images/home/coins/8_fantom.svg",
  },
  {
    name: "cronos",
    img: "https://cdn.xoxlabs.io/images/home/coins/9_cronos.svg",
  },
  {
    name: "ethereumPOW",
    img: "https://cdn.xoxlabs.io/images/home/coins/10_ethereumPOW.svg",
  },
  {
    name: "algorand",
    img: "https://cdn.xoxlabs.io/images/home/coins/12_algorand.svg",
  },
  {
    name: "klaytn",
    img: "https://cdn.xoxlabs.io/images/home/coins/13_klaytn.svg",
  },
  {
    name: "bitgert",
    img: "https://cdn.xoxlabs.io/images/home/coins/14_bitgert.svg",
  },
  {
    name: "aptos",
    img: "https://cdn.xoxlabs.io/images/home/coins/15_aptos.svg",
  },
  {
    name: "acala",
    img: "https://cdn.xoxlabs.io/images/home/coins/16_acala.svg",
  },
  {
    name: "canto",
    img: "https://cdn.xoxlabs.io/images/home/coins/17_canto.svg",
  },
  {
    name: "hedera",
    img: "https://cdn.xoxlabs.io/images/home/coins/19_hedera.svg",
  },
  {
    name: "near",
    img: "https://cdn.xoxlabs.io/images/home/coins/20_near.svg",
  },
  {
    name: "sui",
    img: "https://xoxlabs.io/images/home/coins/sui.svg",
  },
  {
    name: "wave",
    img: "https://cdn.xoxlabs.io/images/home/coins/23_wave.svg",
  },
  {
    name: "aurora",
    img: "https://cdn.xoxlabs.io/images/home/coins/24_aurora.svg",
  },
  {
    name: "celo",
    img: "https://cdn.xoxlabs.io/images/home/coins/25_celo.svg",
  },
  {
    name: "btc",
    img: "https://cdn.xoxlabs.io/images/home/coins/26_bitcoin.svg",
  },
  {
    name: "gnosis",
    img: "https://cdn.xoxlabs.io/images/home/coins/27_gnosis.svg",
  },
  {
    name: "moonbeam",
    img: "https://cdn.xoxlabs.io/images/home/coins/28_moonbeam.svg",
  },
  {
    name: "eos",
    img: "https://cdn.xoxlabs.io/images/home/coins/29_eos.svg",
  },
  {
    name: "cardano",
    img: "https://cdn.xoxlabs.io/images/home/coins/30_cardano.svg",
  },
  {
    name: "elrond",
    img: "https://cdn.xoxlabs.io/images/home/coins/31_elrond.svg",
  },
  {
    name: "heco",
    img: "https://cdn.xoxlabs.io/images/home/coins/32_heco.svg",
  },
  {
    name: "neo",
    img: "https://cdn.xoxlabs.io/images/home/coins/33_neo.svg",
  },
  {
    name: "astar",
    img: "https://cdn.xoxlabs.io/images/home/coins/34_astar.svg",
  },
  {
    name: "kucoin",
    img: "https://cdn.xoxlabs.io/images/home/coins/35_kucoin.svg",
  },
  {
    name: "OKExchain",
    img: "https://cdn.xoxlabs.io/images/home/coins/36_OKExchain.svg",
  },
  {
    name: "metis",
    img: "https://cdn.xoxlabs.io/images/home/coins/37_Metis.svg",
  },
  {
    name: "Tezos",
    img: "https://cdn.xoxlabs.io/images/home/coins/38_Tezos.svg",
  },
  {
    name: "stella",
    img: "https://cdn.xoxlabs.io/images/home/coins/39_stella.svg",
  },
  {
    name: "velas",
    img: "https://cdn.xoxlabs.io/images/home/coins/40_velas.svg",
  },
  {
    name: "41",
    img: "https://cdn.xoxlabs.io/images/home/coins/41.svg",
  },
  {
    name: "fusion",
    img: "https://cdn.xoxlabs.io/images/home/coins/42_fusion.svg",
  },
  {
    name: "kava",
    img: "https://cdn.xoxlabs.io/images/home/coins/11_kava.svg",
  },
  {
    name: "cosmos",
    img: "https://cdn.xoxlabs.io/images/home/coins/44_cosmos.svg",
  },
  {
    name: "kadena",
    img: "https://cdn.xoxlabs.io/images/home/coins/45_kadena.svg",
  },
  {
    name: "telos",
    img: "https://cdn.xoxlabs.io/images/home/coins/46_telos.svg",
  },
  {
    name: "vechain",
    img: "https://cdn.xoxlabs.io/images/home/coins/47_vechain.svg",
  },
  {
    name: "ronin",
    img: "https://cdn.xoxlabs.io/images/home/coins/49_ronin.svg",
  },
  {
    name: "icon",
    img: "https://cdn.xoxlabs.io/images/home/coins/50_icon.svg",
  },
  {
    name: "moonriver",
    img: "https://cdn.xoxlabs.io/images/home/coins/51_moonriver.svg",
  },
  {
    name: "iotex",
    img: "https://cdn.xoxlabs.io/images/home/coins/52_iotex.svg",
  },
  {
    name: "53",
    img: "https://cdn.xoxlabs.io/images/home/coins/53.svg",
  },
  {
    name: "ontology",
    img: "https://cdn.xoxlabs.io/images/home/coins/54_ontology.svg",
  },
  {
    name: "boba",
    img: "https://cdn.xoxlabs.io/images/home/coins/55_boba.svg",
  },
  {
    name: "polkadot",
    img: "https://cdn.xoxlabs.io/images/home/coins/56_polkadot.svg",
  },
  {
    name: "ICP",
    img: "https://cdn.xoxlabs.io/images/home/coins/57_ICP.svg",
  },
  {
    name: "terra",
    img: "https://cdn.xoxlabs.io/images/home/coins/43_terra2.svg",
  },
  {
    name: "tomochain",
    img: "https://cdn.xoxlabs.io/images/home/coins/58_tomochain.svg",
  },
  {
    name: "evmos",
    img: "https://cdn.xoxlabs.io/images/home/coins/60_evmos.svg",
  },
  {
    name: "mixin",
    img: "https://cdn.xoxlabs.io/images/home/coins/61_mixin.svg",
  },
  {
    name: "DefiChain",
    img: "https://cdn.xoxlabs.io/images/home/coins/62_DefiChain.svg",
  },
  {
    name: "subtract",
    img: "https://cdn.xoxlabs.io/images/home/coins/63_subtract.svg",
  },
  {
    name: "vision",
    img: "https://cdn.xoxlabs.io/images/home/coins/64_Vision.svg",
  },
  {
    name: "TLchain",
    img: "https://cdn.xoxlabs.io/images/home/coins/65_TLchain.svg",
  },
  {
    name: "conflux",
    img: "https://cdn.xoxlabs.io/images/home/coins/66_conflux.svg",
  },
  {
    name: "everscale",
    img: "https://cdn.xoxlabs.io/images/home/coins/67_everscale.svg",
  },
  {
    name: "zilliqa",
    img: "https://cdn.xoxlabs.io/images/home/coins/68_zilliqa.svg",
  },
  {
    name: "rootstock",
    img: "https://cdn.xoxlabs.io/images/home/coins/69_rootstock.svg",
  },
];

const SupportedBlockchain = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 1000,
    trackVisibility: true,
  });
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-8 py-10" ref={ref}>
      <h1
        className={`text-[#fff9] font-normal text-lg text-center transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        Supported blockchains
      </h1>
      <div
        className={`grid grid-cols-5 sm:grid-cols-8 md:grid-cols-14 gap-4 transition-all duration-2000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } `}
      >
        {blockchains.map((blockchain, i) => (
          <div key={blockchain.name + i}>
            <div className="bg-[#121212] rounded-full w-12 h-12  flex justify-center items-center p-2 relative">
              <img
                src={blockchain.img}
                alt={blockchain.name}
                className="w-auto"
              />
            </div>
          </div>
        ))}
        <div className="bg-[#121212] rounded-full w-12 h-12  flex justify-center items-center p-2 border-2 border-[#ffa502] border-dashed ">
          <img
            src="https://cdn.xoxlabs.io/images/home/coins/plus.svg"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportedBlockchain;
