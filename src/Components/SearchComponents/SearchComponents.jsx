import React from 'react'
import "./SearchComponents.css"
import SearchUserCard from './SearchUserCard'

const SearchComponents = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { user } = useSelector(store => store)

    dispatch(searchUserAction())
    const handleSearch = (e) => {
        dispatch(searchUserAction({ jwt: token, query: e.target.value }))
    }
    return (
        <div className='searchContainer'>
            <div className='px-3 pb-5'>
                <h1>Search</h1>
                <input onChange={handleSearch} className='searchInput' type="text" placeholder='Search...' />
            </div>
            <hr />
            <div className='px-3 pt-5'>
                {user.searchUser?.map((item) => <SearchUserCard user={item} />)}
            </div>
        </div>
    )
}

export default SearchComponents