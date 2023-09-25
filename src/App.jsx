import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNavbar from './components/BottomNavbar'
import SearchBar from './components/SearchBar'

function App() {
    const handleSearch = (term) => {
        console.log("Searching for:", term);
        // Here you can call an API or perform any other action with the search term.
    }
    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <BottomNavbar/>
        </>
    )
}

export default App
