

export const MainDisplay = ({ children }) => {

    return(
        <>
            <main
                style={{
                    flex: '1 1 auto'
                }}
            >
                { children }
            </main>
        </>
    )
}