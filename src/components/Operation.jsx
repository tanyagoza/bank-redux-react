import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchQuote} from "../features/actions/quoteAction.js";
import {deposit, withdraw} from "../features/api/balanceSlice.js";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <>
        <div className={'flex justify-center'}>
            <button
                className={'bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg py-2 px-4'}
                onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input
                className={'text-center text-white border rounded-lg'}
                type={'number'} onChange={e =>setSum(+e.target.value)}
            value={sum}/>
            <button
                className={'bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg py-2 px-4'}
                onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div>
            <div className={'flex justify-center'}>
                <button
                onClick={() => dispatch(fetchQuote())}
                className={'bg-blue-300 hover:bg-blue-400 text-white font-bold text-lg rounded-lg py-2 px-9 ml-7 mt-1'}>
                    Get Quote</button>
            </div>
        </>
    );
};

export default Operation;