const parent = React.createElement("div", 
                                {id:"parent" }, 
                                React.createElement("div", 
                                    {id:"child1" },
                                    [React.createElement("h1", {id:"h1tag"},"Hello bae i am h1 tag"),
                                    React.createElement("h2", {id:"h2tag"},"Hello bae i am h2 tag")],
                                React.createElement("div", 
                                    {id:"child2" },
                                        [React.createElement("h1", {id:"h1tag"},"Hello bae i am h1 tag"),
                                        React.createElement("h2", {id:"h2tag"},"Hello bae i am h2 tag")]


 ) ));



const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(parent);
