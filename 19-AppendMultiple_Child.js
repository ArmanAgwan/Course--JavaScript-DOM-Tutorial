
        
        /* Create this: <li>[text]</li>*/
        function createListenItem (text) {
            var li = document.createElement('li');
            li.textContent = text;
            return li;
        }

        function appendChildren (parent, children) {
            children.forEach(function(child) {
                parent.appendChild(child);
            });
        }

        var myList = document.getElementById('my-list');
        var items = [
            createListItem('Arman'),
            createListItem('Dom'),
            createListItem('Alex')
        ];

        // appendChildren(myList, items);
        items.forEach(function (li) {
            myList.appendChild(li);
        });

        console.log(myList);
    