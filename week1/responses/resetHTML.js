export default function removeHTML(response, state) {
	response.setHeader('Content-Type', 'text/html')
	response.write(`
		<!html>
		<html>
			<head>
				<title>State</title>
				<link href="styles.css" type="text/css" rel="stylesheet"/>
			</head>
            <body id = "ID1">
            ´${state = 10}´
			</body>
		</html>
	`)
}