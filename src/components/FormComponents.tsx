import { FormComponentsProps } from "@/types";

function FormComponent(props: FormComponentsProps) {
    const { inputs, buttons, message } = props;
    return (
        <form>
            {inputs.map((inputProps, index) => (
                <input key={index} {...inputProps} />
            )) }
            {buttons.map((buttonsProps, index) => (
                <button key={index} {...buttonsProps} />
            )) }
            {
                message && (<div style={{color: message.type === 'error' ? 'red' : 'green'}}>
                    {message.msg}
                </div>)}
            

        </form>
    )
}
export default FormComponent    