function SearchResult(data){
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.date}</p>
        </div>
    );
}


let results = [{},

];



function Home(){
    return(
        <div>
            {results.map((ele.ind) => {
                <SearchResults data = {ele} />
            })}
        </div>
    );
}
// map function works like a foreach loop
// Next.js
// API - the middle man for communicating data between frontend and backend