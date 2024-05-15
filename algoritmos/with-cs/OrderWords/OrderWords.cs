string Order(string words)
{
  if (string.IsNullOrEmpty(words)) return "";

  string[] wordsArray = words.Split(' ');

  return string.Join(" ", wordsArray.OrderBy(word => word.FirstOrDefault(char.IsDigit)));
}

Console.WriteLine(Order("ewe1wew fsd5fsfsd sdfsd2fsd sfsdfs3dfs sdfsdf4sdf"));
