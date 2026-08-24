import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { ButtonLink } from '../../components/Button/styles'
import { usePurchaseMutation } from '../../service/api'
import * as S from './styles'
import Loader from '../../components/Loader'
import Home from '../Home'
import { clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Checkout = () => {
  const navigate = useNavigate()
  const [payment, setPayment] = useState(false)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const { pratos } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      addNumber: '',
      complement: '',
      name: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: yup.object({
      receiver: yup
        .string()
        .min(5, 'The name must be at least 5 characters long')
        .required('The field is required'),
      address: yup
        .string()
        .min(10, 'The name must be at least 10 characters long')
        .required('The field is required'),
      city: yup
        .string()
        .min(5, 'The name must be at least 5 characters long')
        .required('The field is required'),
      zipCode: yup
        .string()
        .min(9, 'The name must be at least 9 characters long')
        .required('The field is required'),
      addNumber: yup
        .number()
        .min(2, 'The name must be at least 4 characters long')
        .required('The field is required'),
      complement: yup.string(),
      name: yup
        .string()
        .min(5, 'The name must be at least 5 characters long')
        .required('The field is required'),
      cardNumber: yup
        .string()
        .min(16, 'The name must be at least 16 characters long')
        .required('The field is required'),
      code: yup
        .string()
        .min(3, 'The name must be at least 3 characters long')
        .required('The field is required'),
      month: yup
        .string()
        .min(2, 'The name must be at least 2 characters long')
        .required('The field is required'),
      year: yup
        .string()
        .min(2, 'The name must be at least 2 characters long')
        .required('The field is required')
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            city: values.city,
            number: Number(values.addNumber),
            complement: values.complement,
            zipCode: values.zipCode
          }
        },
        payment: {
          card: {
            name: values.name,
            code: Number(values.code),
            number: values.cardNumber,
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        products: pratos.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const getErrorMessage = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (pratos.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <>
      {isLoading ? <Loader /> : <Home />}
      {isSuccess && data ? (
        <Card title={`Pedido realizado - ${data.orderId}`}>
          <S.Check>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="marginTop">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="marginTop">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="marginTop">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.Check>
          <S.FormButton>
            <ButtonLink to="/">Concluir</ButtonLink>
          </S.FormButton>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {payment ? (
            <>
              <Card title="Pagamento - Valor a pagar R$">
                <S.Check>
                  <S.InputGroup>
                    <label htmlFor="name">Nome no cartão</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.values.name}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorMessage('name') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <IMaskInput
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorMessage('cardNumber') ? 'error' : ''}
                        mask="0000 0000 0000 0000"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="code">CVV</label>
                      <IMaskInput
                        id="code"
                        type="text"
                        name="code"
                        value={form.values.code}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorMessage('code') ? 'error' : ''}
                        mask="000"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="month">Mês de vencimento</label>
                      <IMaskInput
                        id="month"
                        type="text"
                        name="month"
                        value={form.values.month}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorMessage('month') ? 'error' : ''}
                        mask="00"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="year">Ano de vencimento</label>
                      <IMaskInput
                        id="year"
                        type="text"
                        name="year"
                        value={form.values.year}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorMessage('year') ? 'error' : ''}
                        mask="0000"
                      />
                    </S.InputGroup>
                  </S.Row>
                </S.Check>
                <S.FormButton>
                  <Button
                    title="Finalizar pagamento"
                    disabled={isLoading}
                    type="submit"
                  >
                    Finalizar Pagamento
                  </Button>
                  <Button
                    type="button"
                    onClinck={() => setPayment(false)}
                    title="Voltar pra endereço"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.FormButton>
              </Card>
            </>
          ) : (
            <Card title="Entrega">
              <S.Check>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    type="text"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={getErrorMessage('receiver') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={getErrorMessage('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={getErrorMessage('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="zipCode">CEP</label>
                    <IMaskInput
                      id="zipCode"
                      type="text"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorMessage('zipCode') ? 'error' : ''}
                      mask="00000-000"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="addNumber">Número</label>
                    <IMaskInput
                      id="addNumber"
                      type="text"
                      name="addNumber"
                      value={form.values.addNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorMessage('addNumber') ? 'error' : ''}
                      mask="0000"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opicional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
              </S.Check>
              <S.FormButton>
                <Button
                  type="button"
                  onClinck={() => setPayment(true)}
                  title="continuar com o pagamento"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  onClinck={() => navigate(-1)}
                  type="button"
                  title="Voltar para o carrinho"
                >
                  Voltar para o carrinho
                </Button>
              </S.FormButton>
            </Card>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
