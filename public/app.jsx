var destination = document.querySelector("#container");

var ToDoList = React.createClass({
    getInitialState: function() {
        return {
            items: []
        };
    },
    
    addItem: function(e) {
        var itemArray = this.state.items; //Stores referencestate object items property

        itemArray.push(
            {
                text: this.inputElement.value, // Value of the reference 
                key: Date.now() //Key added to prevent warning and provide uniqueness for the object store in array
            }
        );

        this.setState({
            items: itemArray //Set state object to item's property'
        });

        e.preventDefault();
    },
    render: function() {
        var bodystyle = 
            {
                padding: "50px",
                backgroundColor: "#66CCFF",
                fontFamily: "sans-serif"
            }

         var headerinput =
         {
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #FFF"
         }   

        
         var buttonstyle = {
            padding: "10px",
            fontSize: "16px",
            margin: "10px",
            backgroundColor: "#0066FF",
            color: "#FFF"
         }


        return(
            <div style={bodystyle} className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input style={headerinput}
                     ref={(input) => this.inputElement = input} //Store input reference
                     placeholder="enter task">
                    </input>
                    <button style={buttonstyle} type="submit">add</button>
                </form>
            </div>
        </div>
        );     
    }
});

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);