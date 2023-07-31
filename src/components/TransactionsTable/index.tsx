import { Container } from "./style"

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>31/07/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000,00</td>
                        <td>Casa</td>
                        <td>31/07/2023</td>
                    </tr>
                    <tr>
                        <td>Conta de Luz</td>
                        <td className="withdraw">- R$ 100,00</td>
                        <td>Casa</td>
                        <td>31/07/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}