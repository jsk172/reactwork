const MyComponent = (props) => {
    //props = 속성을 부모 컴포넌트 -> 자식 컴포넌트로 넘겨짐
    const {name, age} = props //props.name, props.age
    return(
        <>
            <div>
                <h3>내 이름은 {name}입니다.<br></br>
                    나이는 {age}세입니다.
                </h3>
                {/*<h3>내 이름은 {props.name}입니다.<br></br>
                    나이는 {props.age}세입니다.
                </h3>*/}
            </div>
        </>
    )
}
export default MyComponent