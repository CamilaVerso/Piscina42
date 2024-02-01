import { IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StoreOutlinedIcon from '@mui/icons-material/storeOutlined'

import { HeaderContainer } from './styles'
import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { ShoppingCartContext } from '../../context/ShoppingCartContext'

export function Header() {
  const navigate = useNavigate()
  // const { cartProducts } = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <IconButton onClick={() => navigate('/')}>
        <StoreOutlinedIcon
          aria-label="Ecommerce"
          titleAccess="Ecommerce ícone"
          sx={{ fontSize: '48px', cursor: 'pointer' }}
        />
      </IconButton>
      <div>
        <span>São Paulo, SP</span>
        <IconButton aria-label="carrinho" onClick={() => navigate('/checkout')}>
          {/* <Badge badgeContent={cartProducts.length} color="secondary"> */}
          <ShoppingCartOutlinedIcon />
          {/* </Badge> */}
        </IconButton>
      </div>
    </HeaderContainer>
  )
}
