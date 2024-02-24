function Row(props) {
  let color = props.ath_change_percentage > 0 ? "lightgreen" : "red";
  return (
    <>
      <tr>
        <td>
          <img src={props.image}></img>
        </td>
        <td>{props.name}</td>
        <td>{props.symbol}</td>
        <td>${props.current_price}</td>
        <td>${props.market_cap}</td>
        <td style={{ color }}>{props.ath_change_percentage}%</td>
        <td>Mkt_cap: ${props.total_volume}</td>
      </tr>
      <tr>
        <td colSpan={8}>
          <hr></hr>
        </td>
      </tr>
    </>
  );
}
export default Row;
