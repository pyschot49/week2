'use strict';

function showData(arg1) {
  return <div>
    <ol>
        {
          arg1.list.map((item,index) => (
            <li key={index}>
              <h3>
              {item.hostname}
              </h3>
              <h3>
              {item.ip_address}
              </h3>
              <h3>
              {item.resources}
              </h3>
            </li>
          )
        )
        }
    </ol>
  </div>;
};


$.getJSON(
  'network.json', function(jsonFromJquery){
  ReactDOM.render(<showData list={jsonFromJquery} />, document.getElementById("holder"));
  }
);
