import Image from 'next/image'
import { useEffect, useState, useContext } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import Logo from '../assets/logo.png'
import { TransactionContext } from '../context/TransactionContext'
import { client } from '../lib/sanityClient'

const style = {
  wrapper: `p-5 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  buttonsContainer: `flex w-4/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  mobileblock:`hidden sm:flex`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonSpace: `flex items-center justify-center w-3 h-10`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex  items-center justify-center text-[#4F90EA]`,
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const { connectWallet, currentAccount } = useContext(TransactionContext)
  const [userName, setUserName] = useState()

  useEffect(() => {
    if (currentAccount) {
      ;(async () => {
        const query = `
        *[_type=="users" && _id == "${currentAccount}"] {
          userName,
        }
        `
        const clientRes = await client.fetch(query)

        if (!(clientRes[0].userName == 'Unnamed')) {
          setUserName(clientRes[0].userName)
        } else {
          setUserName(
            `${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`,
          )
        }
      })()
    }
  }, [currentAccount])

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={Logo} alt='uniswap' height={40} width={40} />
      </div>
      <div className={style.nav}>

      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding} ${style.mobileblock}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt='eth logo' height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonSpace}>
          </div>
        </div>
        {currentAccount ? (
          <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>{userName}</div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header