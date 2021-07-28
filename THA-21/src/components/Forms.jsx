import { useState } from 'react';
const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [acceptedterms, setAcceptedTerms] = useState('');

  const handleSubmit = (event) => {
    console.log(
      `mail: ${email} password: ${password} country:${country} terms: ${acceptedterms}`
    );
    event.preventDefault();
  };

  return (
    <form>
      <h1>Create Form</h1>
      <label>
        E-mail:
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label>
        Country:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option key="india">India</option>
          <option key="usa">USA</option>
          <option key="lond">England</option>
          <option key="bra">Brazil</option>
        </select>
      </label>

      <label>
        <input
          type="checkbox"
          value={acceptedterms}
          name="acceptedterms"
          onChange={(e) => setAcceptedTerms(e.target.value)}
        />{' '}
        I accept it
      </label>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        click
      </button>
    </form>
  );
};
export default Form;
