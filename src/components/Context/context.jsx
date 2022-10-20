import {createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [onAction, setonAction] = useState(false)
    const [seletedcoin, setseletedcoin] = useState({})
    const [selectedAction, setselectedAction] = useState({})
    const [opensettings, setopensettings] = useState(false)
    const [onTransaction, setonTransaction] = useState(false)
    const [openmenu, setopenmenu] = useState('vaults')
    const [cointype, setcointype] = useState("crypto");
    const [selectAsset, setselectAsset] = useState(false)
    const [assetname, setassetname] = useState('')
    const [fromasset, setfromasset] = useState({})
    const [openpopup, setopenpopup] = useState('')
    const [allapps, setallapps] = useState([])
    const [updateaftertrade, setupdateaftertrade] = useState(false)
    const [selectedApp, setselectedApp] = useState({})
    const [valutbalances, setvalutbalances] = useState([])
    const [mycoinreq, setmycoinreq] = useState({})
    const [select, setselect] = useState('')

    
    const value = {
        openmenu,
        onAction, 
        seletedcoin,
        selectedAction,
        opensettings,
        onTransaction,
        cointype,
        setcointype,
        setopenmenu,
        setonAction, 
        setseletedcoin,
        setselectedAction,
        setopensettings,
        setonTransaction,
        selectAsset,
        setselectAsset,
        assetname,
        setassetname,
        fromasset,
        setfromasset,
        openpopup,
        setopenpopup,
        allapps,
        setallapps,
        updateaftertrade,
        setupdateaftertrade,
        selectedApp,
        setselectedApp,
        valutbalances,
        setvalutbalances,
        mycoinreq,
        setmycoinreq,
        select,
        setselect,
    }
    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContextProvider;

export const MainContextConsumer = MainContext.Consumer