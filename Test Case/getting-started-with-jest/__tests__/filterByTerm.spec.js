function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function (arrayElement) {
        if (searchTerm.length == 0)
            return arrayElement.url == searchTerm;
        return arrayElement.url.match(regex);
    });
}

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        // actual test
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "LINK")).toEqual(output); // New test
    });

    test("it should filter by a search term (uRl)", () => {
        // actual test
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
        ];

        expect(filterByTerm(input, "uRl")).toEqual(output); // New test
    });

    test("it should filter by a search term (\"\")", () => {
        // actual test
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [];

        expect(filterByTerm(input, "")).toEqual(output); // New test
    });
});