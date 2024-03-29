const CurrencyInputs = ({ amount, currencies, setAmount }) => {
    return (
      <>
        <input defaultValue={amount} onChange={(e) => setAmount(e.target.value)} />
        <select>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </>
    );
  };

export default customElements;
