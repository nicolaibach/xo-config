module.exports = {
	env: ['es2022', 'node'],
	prettier: true,
	rules: {
		'unicorn/no-array-callback-reference': 0,
		'import/order': [
			'warn',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				'newlines-between': 'always',
			},
		],
	},
};
