// import { Add, AddShoppingCart, Remove } from '@mui/icons-material'
// import {
//   CardInfoContainer,
//   CoffeeCardContainer,
//   // CoffeeTagsContainer,
//   CoffeeValueContainer,
//   IncrementDecrementContainer,
// } from './styles'
// import { IconButton } from '@mui/material'

// import { Store } from '../../utils/interface'
// import { useState } from 'react'
// // import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// interface ItensCardProps {
//   itensData: Store
// }

// export function ItemCard({ itensData }: ItensCardProps) {
//   const [itemQuantity, setItemQuantity] = useState(0)
//   // const { addProductToCart } = useContext(ShoppingCartContext)

//   function handleStoreQuantity(isIncrement: boolean) {
//     if (isIncrement) {
//       setItemQuantity((state) => (state += 1))
//     } else if (itemQuantity > 0) {
//       setItemQuantity((state) => (state -= 1))
//     }
//   }

//   return (
//     <CoffeeCardContainer>
//       <img src={itensData.image} />

//       {/* <CoffeeTagsContainer>
//         {itensData.products
//           ? itensData.products.map((title: string) => {
//               return <span key={id}>{title}</span>
//             })
//           : null}
//       </CoffeeTagsContainer> */}

//       <div>
//         <strong>{itensData.title}</strong>
//         <p>{itensData.description}</p>
//       </div>

//       <CardInfoContainer>
//         <CoffeeValueContainer>
//           R$ <strong>{itensData.price}</strong>
//         </CoffeeValueContainer>
//         <div>
//           <IncrementDecrementContainer>
//             <IconButton
//               title="Diminuir quantidade"
//               onClick={() => handleStoreQuantity(false)}
//             >
//               <Remove />
//             </IconButton>
//             <span>{itemQuantity}</span>
//             <IconButton
//               title="Aumentar quantidade"
//               onClick={() => handleStoreQuantity(true)}
//             >
//               <Add />
//             </IconButton>
//           </IncrementDecrementContainer>
//           <IconButton
//             sx={{
//               backgroundColor: '#b47150',
//               color: '#FFF',
//               '&:hover': { backgroundColor: '#bc8062' },
//             }}
//             disabled={itemQuantity === 0}
//             title="Adicionar ao carrinho"
//             // onClick={() =>
//             //   addProductToCart({
//             //     ...itensData,
//             //     quantity: itemQuantity,
//             //     originalValue: itensData.value,
//             //   })
//             // }
//           >
//             <AddShoppingCart />
//           </IconButton>
//         </div>
//       </CardInfoContainer>
//     </CoffeeCardContainer>
//   )
// }

import { Add, Remove } from '@mui/icons-material'
import {
  CardInfoContainer,
  StoreCardContainer,
  StoreValueContainer,
  IncrementDecrementContainer,
  LimitText,
  ModalButton,
} from './styles'
import { IconButton, Typography, Modal, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Store } from '../../utils/interface'

interface ItensCardProps {
  itensData: Store
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export function ItemCard({ itensData }: ItensCardProps) {
  const [itemQuantity, setItemQuantity] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  function handleStoreQuantity(isIncrement: boolean) {
    if (isIncrement) {
      setItemQuantity((state) => (state += 1))
    } else if (itemQuantity > 0) {
      setItemQuantity((state) => (state -= 1))
    }
  }

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  return (
    <StoreCardContainer>
      <img src={itensData.image} />

      <div>
        <LimitText>
          <strong>{itensData.title}</strong>
        </LimitText>
        <ModalButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#b47150',
              color: '#FFF',
              '&:hover': { backgroundColor: '#bc8062' },
            }}
            onClick={handleOpenModal}
          >
            Ver mais
          </Button>
        </ModalButton>
      </div>

      <CardInfoContainer>
        <StoreValueContainer>
          R$ <strong>{itensData.price}</strong>
        </StoreValueContainer>
        <div>
          <IncrementDecrementContainer>
            <IconButton
              title="Diminuir quantidade"
              onClick={() => handleStoreQuantity(false)}
            >
              <Remove />
            </IconButton>
            <span>{itemQuantity}</span>
            <IconButton
              title="Aumentar quantidade"
              onClick={() => handleStoreQuantity(true)}
            >
              <Add />
            </IconButton>
          </IncrementDecrementContainer>
        </div>
      </CardInfoContainer>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {itensData.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {itensData.description}
          </Typography>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </Box>
      </Modal>
    </StoreCardContainer>
  )
}
