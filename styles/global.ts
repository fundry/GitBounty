import styled from 'styled-components'

const Text: String = styled.p`
    font-size : 1.1rem;
`

const Body: String = styled.p`
    padding: 1rem;
`

const HeaderBody: any = styled.nav`
    padding: 1rem;
    display: flex;
    background : transparent;
    box-shadow: 0px 3px 4px grey;
    justify-content : space-between;
    h4 {
        color : grey;
    }
    a {
        padding-right  : 10px;
    }
`

const Button: any = styled.button`
    padding: 0.5rem 2.5rem;
    border: 1px solid #000;
    outline : 0px;
    background : transparent;
    color: #000
`

export {
    Text , HeaderBody , Body , Button
}