interface Owner {
  id: string;
  chain: string;
  public_address: string;
  public_key_encryption?: string;
}

interface Issuer {
  id: string;
  chain: string;
  public_address: string;
}

interface Verifier {
  id: string;
  chain: string;
  public_address: string;
}

interface IssuingRequestField {
  name: string;
  type: string;
}

interface Attribute {
  name: string;
  type: string;
}

export { IssuingRequestField, Attribute, Issuer, Owner, Verifier };
