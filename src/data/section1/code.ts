export const sectionCode1 = 'import { QueryClient, QueryClientProvider, useQuery } from \'@tanstack/react-query\'\n' +
    '\n' +
    'const queryClient = new QueryClient()\n' +
    '\n' +
    'export default function App() {\n' +
    '  return (\n' +
    '    <QueryClientProvider client={queryClient}>\n' +
    '      <Example />\n' +
    '    </QueryClientProvider>\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'function Example() {\n' +
    '  const { isLoading, error, data } = useQuery({\n' +
    '    queryKey: [\'repoData\'],\n' +
    '    queryFn: () =>\n' +
    '      fetch(\'https://api.github.com/repos/tannerlinsley/react-query\').then(res =>\n' +
    '        res.json()\n' +
    '      )\n' +
    '  })\n' +
    '\n' +
    '  if (isLoading) return \'Loading...\'\n' +
    '\n' +
    '  if (error) return \'An error has occurred: \' + error.message\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>{data.name}</h1>\n' +
    '      <p>{data.description}</p>\n' +
    '      <strong>👀 {data.subscribers_count}</strong>{\' \'}\n' +
    '      <strong>✨ {data.stargazers_count}</strong>{\' \'}\n' +
    '      <strong>🍴 {data.forks_count}</strong>\n' +
    '    </div>\n' +
    '  )\n' +
    '}'