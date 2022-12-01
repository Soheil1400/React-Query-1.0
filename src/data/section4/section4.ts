
export const sectionCode4 = 'import {\n' +
    '  useMutation,\n' +
    '  useQueryClient,\n' +
    '  QueryClient,\n' +
    '  QueryClientProvider,\n' +
    '} from \'@tanstack/react-query\'\n' +
    'import { postTodo } from \'../my-api\'\n' +
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
    '  // Mutations\n' +
    '  const mutation = useMutation({\n' +
    '    mutationFn: postTodo,\n' +
    '    onSuccess: () => {\n' +
    '      // Invalidate and refetch\n' +
    '      queryClient.invalidateQueries({ queryKey: [\'todos\'] })\n' +
    '    },\n' +
    '  })\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <button\n' +
    '        onClick={() => {\n' +
    '          mutation.mutate({\n' +
    '            id: Date.now(),\n' +
    '            title: \'Do Laundry\',\n' +
    '          })\n' +
    '        }}\n' +
    '      >\n' +
    '        Add Todo\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'render(<App />, document.getElementById(\'root\'))'