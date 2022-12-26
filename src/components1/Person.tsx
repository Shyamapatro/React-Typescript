type PersonProps = {
    personInfo: {
        firstName: string
        lastName: string
    },
    nameList:
    {
        first: string
        last: string
    }[]

}

const Person = (props: PersonProps) => {
    return (
        <>
            <div>{props.personInfo.firstName}-{props.personInfo.lastName}</div>
            <div>
                {
                    props.nameList.map(name => {
                        return (
                            <h2 key={name.first}>{name.first}---{name.last}</h2>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Person