function Card({ children }) {
    return (
        <div className="bg-sky-100 rounded-xl shadow-lg border-2 p-2 w-150">
            {children}
        </div>
    )
}

export default Card;