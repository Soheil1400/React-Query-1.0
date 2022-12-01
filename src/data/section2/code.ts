
export const sectionCode2 = 'import {\n' +
    '  useQuery,\n' +
    '  useQueryClient,\n' +
    '  QueryClient,\n' +
    '  QueryClientProvider,\n' +
    '} from \'@tanstack/react-query\'\n' +
    'import { getTodos } from \'../my-api\'\n' +
    '\n' +
    '// Create a client\n' +
    'const queryClient = new QueryClient()\n' +
    '\n' +
    'function App() {\n' +
    '  return (\n' +
    '    // Provide the client to your App\n' +
    '    <QueryClientProvider client={queryClient}>\n' +
    '      <Todos />\n' +
    '    </QueryClientProvider>\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'function Todos() {\n' +
    '  // Access the client\n' +
    '  const queryClient = useQueryClient()\n' +
    '\n' +
    '  // Queries\n' +
    '  const query = useQuery({ queryKey: [\'todos\'], queryFn: getTodos })\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <ul>\n' +
    '        {query.data?.map(todo => (\n' +
    '          <li key={todo.id}>{todo.title}</li>\n' +
    '        ))}\n' +
    '      </ul>\n' +
    '\n' +
    '    </div>\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'render(<App />, document.getElementById(\'root\'))'