import { supabase } from 'src/services/supabase';

export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Erro ao logar:', error.message);
    return null;
  }

  return data.user;
}

export async function updateUserName(userId: string, newName: string) {
  const { data, error } = await supabase
    .from('users')
    .update({ username: newName })
    .eq('id', userId);

  if (error) {
    console.error('Erro ao atualizar nome:', error.message);
    return null;
  }

  return data;
}

export async function updatePassword(newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    console.error('Erro ao mudar senha:', error.message);
    return null;
  }

  return data;
}

export async function deleteUserAccount(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', userId);

  if (error) {
    console.error('Erro ao deletar conta no banco:', error.message);
    return null;
  }

  const { error: authError } = await supabase.auth.admin.deleteUser(userId);

  if (authError) {
    console.error(
      'Erro ao deletar usuário no Supabase Auth:',
      authError.message
    );
    return null;
  }

  return data;
}
