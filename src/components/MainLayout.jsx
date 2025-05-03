import NavBar from "./NavBar";

function MainLayout({ children }) {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout;