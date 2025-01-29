
interface MeldTableProps {
    key: string,
    filterChar: string,
    filterType: string,
    recipeType: string,
    data: MeldDataType1[] | MeldDataType2[]
}

interface MeldDataType1 {
    Name: string,
    Ingredient1: string,
    Ingredient2: string,
    Crystal: string,
}

interface MeldDataType2 {
    Name: string,
    Character: string,
    Ingredient1: string,
    Ingredient2: string,
    Success: number,
}


function MeldTable(props: MeldTableProps) {
    const { data } = props;
    function isMeldDataType1(data: MeldDataType1[] | MeldDataType2[]): data is MeldDataType1[] {

        return "Crystal" in data[0]
    }

    function isMeldDataType2(data: MeldDataType1[] | MeldDataType2[]): data is MeldDataType2[] {
        return Array.isArray(data) && data.length > 0 && (data[0] as MeldDataType2).Success !== undefined;
    }



    if (isMeldDataType1(data)) {
        // Handle MeldDataType1
        return (
            <>
                <h1>{props.recipeType} </h1>
                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ingredient1</th>
                            <th>Ingredient2</th>
                            <th>Crystal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Ingredient1}</td>
                                <td>{item.Ingredient2}</td>
                                <td>{item.Crystal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    } else if (isMeldDataType2(data)) {
        // Handle MeldDataType2[]
        return (
            <>
                <h1>{props.recipeType} </h1>
                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Character</th>
                            <th>Ingredient1</th>
                            <th>Ingredient2</th>
                            <th>Success</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((item) => {
                            const names = props.filterChar.split(", ").filter(Boolean);
                            let check = false;
                            if (names.length >= 1) {
                                names.forEach(name => {
                                    if (item.Character.includes(name)) {
                                        check = true
                                    }
                                });
                            } else {
                                return true;
                            }

                            return check;

                        }

                        ).map((item, index) => (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Character}</td>
                                <td>{item.Ingredient1}</td>
                                <td>{item.Ingredient2}</td>
                                <td>{item.Success}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    } else {
        // Handle unexpected data type
        return <div>Unexpected data type {props.recipeType}</div>;
    }
}




export default MeldTable;