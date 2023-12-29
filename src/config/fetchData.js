
const ConnectedUsersList = () => {
    const [connectedUsers, setConnectedUsers] = useState([]);
  
    useEffect(() => {
      const fetchConnectedUsers = async () => {
        try {
          // Запрос к таблице в вашей базе данных Supabase
          const { data, error } = await supabase
            .from('users') 
            .select('*');
  
          if (error) {
            console.error('Ошибка при запросе данных из Supabase:', error.message);
          } else {
            setConnectedUsers(data);
          }
        } catch (error) {
          console.error('Ошибка при выполнении запроса:', error.message);
        }
      };
  
      fetchConnectedUsers();
    }, []);}