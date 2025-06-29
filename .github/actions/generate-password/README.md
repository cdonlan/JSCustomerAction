# Generate Random Password GitHub Action

This custom JavaScript GitHub Action generates a random password of length 10, which is guaranteed to include at least one letter, one number, and one special character.

## Outputs
- `password`: The generated password string.

## Usage Example

```yaml
- name: Generate password
  id: genpass
  uses: ./.github/actions/generate-password
- name: Show password
  run: echo "Generated password: ${{ steps.genpass.outputs.password }}"
```

## Development

Install dependencies:

```sh
npm install
```

## License

MIT
