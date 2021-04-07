const postData = async (url, data) => {  //настройка поста
	const res = await fetch(url, {
		method: "POST",
		headers: {
			'Content-type': 'application/json; charset=utf-8'
		},
		body: data
	});

	return await res.json();
};

async function getResourse(url) {   //?настройка запроса
	let res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Coud not feth ${url}, status: ${res.status}`);
	}

	return await res.json();
}

export { postData };
export { getResourse };