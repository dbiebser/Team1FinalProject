import React from 'react';

const SearchDropdown = () => {
    const [data, setData] = useState([]);

  const fetchData = () => {

    return fetch("https://jsonplaceholder.typicode.com/users")

      .then((res) => res.json())

      .then((d) => setData(d));

  };

  useEffect(() => {

    fetchData();

  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {

    return data.filter((data) =>

      search_parameters.some((parameter) =>

        data[parameter].toString().toLowerCase().includes(query)

      )

    );

  }

    return (
        <div className="container">

      <center>

        <h1>Search component</h1>

      </center>

      <div className="input-box">

        <input

          type="search"

          name="search-form"

          id="search-form"

          className="search-input"

          onChange={(e) => setQuery(e.target.value)}

          placeholder="Search user"

        />

      </div>

      <center>

        {search(data).map((dataObj) => {

          return (

            <div className="box">

              <div class="card">

                <div class="category">@{dataObj.title} </div>

              </div>

            </div>

          );

        })}

      </center>

    </div>
    )
}
