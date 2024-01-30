const Keys = ({menu})=>{

    console.log(menu);

    return(

        <ul>
            {
                menu.map((m)=>{
                    return(
                        <li key={m.id}>
                            {
                                m.name
                            }
                        </li>
                    )
                })
            }
        </ul>

    )

}
export default Keys;