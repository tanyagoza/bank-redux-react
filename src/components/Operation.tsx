import {useState} from "react";
import {fetchQuote} from "../features/api/quoteAction.js";
import {deposit, withdraw} from "../features/account/balanceSlice.js";
import {useAppDispatch} from "../app/hooks.ts";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useAppDispatch();

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