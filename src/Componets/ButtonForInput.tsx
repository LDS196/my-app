
type ButtonForInputType={
    name: string,
    callBack: ()=> void,

}

export const ButtonForInput = (props:ButtonForInputType) => {
    const onClickButtonHandler = ()=>{
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};

