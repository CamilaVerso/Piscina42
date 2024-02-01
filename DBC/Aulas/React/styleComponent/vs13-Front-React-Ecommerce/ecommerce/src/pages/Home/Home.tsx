import { useContext, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { StoreContext } from '../../context/StoreContext'
import { DefaultPageLayoutContainer } from '../styles'
import {
  BigHeroSection,
  CustomButton,
  StoreSection,
  StoresContainer,
} from './style'
import { ItemCard } from '../../components/ItemCard/ItemCard'
import Banner from '../../../public/Banner.webp'

export function Home() {
  const { storeData, getAllItens } = useContext(StoreContext)

  useEffect(() => {
    getAllItens()
  }, [])

  return (
    <>
      <Header />
      <DefaultPageLayoutContainer>
        <BigHeroSection>
          <div>
            <img src={Banner} alt="Banner de loja online" />
            <CustomButton onClick={() => (window.location.href = '#store')}>
              Confira!
            </CustomButton>
          </div>
          {/* <div>
            {storeData && storeData.length > 0 && (
              <>
                {storeData.map((store) => (
                  <img key={store.id} src={store.image} alt="" />
                ))}
              </>
            )}
          </div> */}
        </BigHeroSection>
        <StoreSection id="store">
          <h2>Sua melhor escolha</h2>
          <StoresContainer>
            {storeData ? (
              storeData.map((store) => {
                console.log(store)
                return <ItemCard key={store.id} itensData={store} />
              })
            ) : (
              <h2>Ops, a loja está sem estoque!</h2>
            )}
          </StoresContainer>
        </StoreSection>
      </DefaultPageLayoutContainer>
    </>
  )
}
