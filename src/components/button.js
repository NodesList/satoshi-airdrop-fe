export default function Button ({text, func}) {
    return (
        <button onClick={ func } className="button-inset gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-3 rounded-full">{ text }</button>
    )
}