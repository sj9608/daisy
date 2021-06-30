import { removeAllChildren } from '../bolt.js'
class vList {
    constructor({ listItems, container, onSelect }) {

        this.listContainer = container
        this.listData = listItems

        listItems.forEach((item) => {
            let _li = document.createElement('li')
            _li.textContent = item.name
            _li.data_value = item.value
            // console.log(item)
            container.appendChild(_li)
        })

        this.onSelect = onSelect
        container.addEventListener('click', (evt) => {
            if (this.selectNodeItem) {
                this.selectNodeItem.classList.remove('selected')

            }
            this.selectNodeItem = evt.target
            this.selectNodeItem.classList.add('selected')

            // console.log(item)

            this.onSelect(evt.target.data_value, evt.target)

        })
    }
    removeSelectedItem() {

        let _temp = this.selectNodeItem
        if (_temp.nextElementSibling) {
            this.selectNodeItem = _temp.nextElementSibling
            this.selectNodeItem.classList.add('selected')
            this.listContainer.removeChild(_temp)
            this.onSelect(this.selectNodeItem.data_value, this.selectNodeItem)

            //내부리스트데이터도 지우기 
            let _idx = this.listData.findIndex( (_)=> {
                return _.name == this.selectNodeItem.data_value

            } )

            
            if(_idx > -1) {
                this.listData.splice(_idx,1)
            }

            // console.log(this.listData)
        }
        else {
            this.selectNodeItem = undefined
            this.listContainer.removeChild(_temp)
        }
    }
    async selectItem(value) {

        let _item = this.listContainer.firstChild

        while(_item) {
            // console.log(_item.data_value)

            if(_item.data_value == value) break;

            _item = _item.nextElementSibling
            
        }

        if(_item) {

            this.deSelectItem()
            _item.classList.add('selected')
            this.selectNodeItem = _item
            await this.onSelect(this.selectNodeItem.data_value, this.selectNodeItem)
        }

        return _item
    }
    selectNextItem() {
        if (this.selectNodeItem) {
            let _temp = this.selectNodeItem
            if (_temp.nextElementSibling) {
                this.selectNodeItem = _temp.nextElementSibling
                this.selectNodeItem.classList.add('selected')
                _temp.classList.remove('selected')
                this.onSelect(this.selectNodeItem.data_value, this.selectNodeItem)
            }

        }
        return this.selectNodeItem;
    }
    selectPrevItem() {
        if (this.selectNodeItem) {
            let _temp = this.selectNodeItem
            if (_temp.previousElementSibling) {
                this.selectNodeItem = _temp.previousElementSibling
                this.selectNodeItem.classList.add('selected')
                _temp.classList.remove('selected')
                this.onSelect(this.selectNodeItem.data_value, this.selectNodeItem)
            }
        }
        return this.selectNodeItem;
    }
    deSelectItem() {
        if (this.selectNodeItem) {
            this.selectNodeItem.classList.remove('selected')
            this.selectNodeItem = undefined
        }
    }
    update(listItems) {

        removeAllChildren(this.listContainer)

        listItems.forEach((item) => {
            let _li = document.createElement('li')
            _li.textContent = item.name
            _li.data_value = item.value
            // console.log(item)
            this.listContainer.appendChild(_li)
        })

        this.selectNodeItem = undefined;

        this.listData = listItems


    }

}


export { vList }