import React from 'react';
import { Button, Form, Input, Flex } from 'antd';
import Link from 'antd/es/typography/Link';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="login"
      onFinish={onFinish}
      className='w-full px-4'
      layout='vertical'
      requiredMark={false}
      style={{
        width: 'full',
        maxWidth: '400px'
      }}
    >
      <Form.Item
        name="username"
        label='Login'
        rules={[
          {
            required: true,
            message: 'Ingresa tu correo',
          },
        ]}
      >
        <Input placeholder="Usuario o Correo" variant='filled' size='large'/>
      </Form.Item>
      <Form.Item
        name="password"
        label='Contraseña'
        rules={[
          {
            required: true,
            message: 'Ingresa tu contraseña',
          },
        ]}
      >
        <Input type="password" placeholder="Ingrese contraseña" variant='filled' size='large'/>
      </Form.Item>

      <Flex justify="end" className='mb-3'>
        <Link href="/">¿Olvidaste la contraseña?</Link>
      </Flex>

      <Form.Item className='mb-3'>
        <Button block type="primary" htmlType="submit">
          Iniciar Sesión
        </Button>
      </Form.Item>

      <Flex justify="center">
        ¿Aún no tienes cuenta?&nbsp;
        <Link href="/register">Registrate</Link>
      </Flex>

    </Form>
  );
};

export { LoginForm };