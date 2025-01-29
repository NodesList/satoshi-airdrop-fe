export default function AssetRecord ({title, amount, time, txStatus}) {
    return (
        <div className="grid grid-cols-2 gap-2">
            <p className="text-memo-text">{ title }</p>
            <p className="text-memo-text text-right">{ amount }</p>
            <p className="text-white text-sm">{ time }</p>
            <p className="text-memo-color-2 text-right italic">{ txStatus }</p>
        </div>
    )
}