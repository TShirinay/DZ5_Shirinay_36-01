import {useState} from "react";

function MainPage(props) {
    const [input, setInput] = useState("")
    const [Case, setCase] = useState([])
    function addCase () {

        input === '' ? alert ('Введите какое-то дело'): setCase([...Case, input])

    }
    function changeInput  (index) {
        const updateNames = [...Case]
        updateNames[index] = input
        setCase(updateNames)
    }
    return (
        <div>
            <input type="text" placeholder='Введите имя' onChange={event => setInput(event.target.value)}/>
            <button onClick={addCase}>Добавить</button>
            <ul>
                {
                    Case.length === 0 ?
                        <li>Список пуст</li>
                        :
                        Case.map((el, index) => [ <div>
                                <li key={index}>
                                    {el}
                                </li>
                                <button onClick={() => changeInput(index)}>Поменять</button>
                            </div>]
                        )
                }
            </ul>
        </div>
    );
}

export default MainPage;