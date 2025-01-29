import AssetBox from "@/components/asset-box";
import Bg from "@/components/bg";
import { Header2 } from "@/components/headers";

export default function Assets() {
    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header2 title={"My Assets"} />

                <div className="flex flex-col gap-8">
                    <AssetBox logo={"/images/download (1) 1.svg"} title={"BTC"} balance={0.000} available={"0.000000"} frozen={0.000000} />
                    <AssetBox logo={"/images/download (1) 2.svg"} title={"CORE-1"} balance={0.000} available={"0.000000"} frozen={0.000000} />
                    <AssetBox logo={"/images/download (1) 3.svg"} title={"ETH"} balance={0.000} available={"0.000000"} frozen={0.000000} />
                </div>
            </div>
        </>
    )
}