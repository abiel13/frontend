


const SearchPage  =   ({params}: {params : {search :string}}) => { 
    return(
        <div className='text-white min-h-[90vh] text-3xl'>Search : {params.search}</div>
    )
}

export default SearchPage